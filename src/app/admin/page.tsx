'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trash2, Download, Search, LogOut, Users, TrendingUp, Calendar, BarChart3 } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Inquiry {
  id: number
  name: string
  contact: string
  location: string
  created_at: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === 'kmong_2025!') {
      setIsAuthenticated(true)
      setError('')
      setPassword('')
      setLoading(true)
      fetchInquiries()
    } else {
      setError('비밀번호가 일치하지 않습니다.')
      setPassword('')
    }
  }

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('kmong_6_inquiries')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setInquiries(data || [])
    } catch (error) {
      console.error('Error fetching inquiries:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setInquiries([])
    setPassword('')
  }

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('kmong_6_inquiries')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      // 목록 새로고침
      fetchInquiries()
    } catch (error) {
      console.error('Error deleting inquiry:', error)
      alert('삭제 중 오류가 발생했습니다.')
    }
  }

  const filteredInquiries = inquiries.filter(inquiry =>
    inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.contact.includes(searchTerm) ||
    inquiry.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const exportToCSV = () => {
    const headers = ['ID', '이름', '연락처', '문의내용', '등록일시']
    const rows = inquiries.map(item => [
      item.id,
      item.name,
      item.contact,
      item.location,
      new Date(item.created_at).toLocaleString('ko-KR')
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `inquiries_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  // 로그인 페이지
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">관리자 대시보드</CardTitle>
            <CardDescription className="text-center">
              비밀번호를 입력하여 접속하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // 통계 계산
  const todayCount = inquiries.filter(i => 
    new Date(i.created_at).toDateString() === new Date().toDateString()
  ).length

  const thisMonthCount = inquiries.filter(i => {
    const date = new Date(i.created_at)
    const now = new Date()
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  }).length

  // 차트 데이터 준비
  const prepareChartData = () => {
    const now = new Date()
    
    // 일간 데이터 (최근 7일)
    const dailyData = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      const dateStr = date.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' })
      
      const count = inquiries.filter(inquiry => {
        const inquiryDate = new Date(inquiry.created_at)
        return inquiryDate.toDateString() === date.toDateString()
      }).length
      
      dailyData.push({ date: dateStr, count })
    }
    
    // 주간 데이터 (최근 4주)
    const weeklyData = []
    for (let i = 3; i >= 0; i--) {
      const weekStart = new Date(now)
      weekStart.setDate(weekStart.getDate() - (i * 7 + weekStart.getDay()))
      const weekEnd = new Date(weekStart)
      weekEnd.setDate(weekEnd.getDate() + 6)
      
      const count = inquiries.filter(inquiry => {
        const inquiryDate = new Date(inquiry.created_at)
        return inquiryDate >= weekStart && inquiryDate <= weekEnd
      }).length
      
      weeklyData.push({
        week: `${weekStart.getMonth() + 1}/${weekStart.getDate()}`,
        count
      })
    }
    
    // 월간 데이터 (최근 6개월)
    const monthlyData = []
    for (let i = 5; i >= 0; i--) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const monthStr = monthDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })
      
      const count = inquiries.filter(inquiry => {
        const inquiryDate = new Date(inquiry.created_at)
        return inquiryDate.getMonth() === monthDate.getMonth() && 
               inquiryDate.getFullYear() === monthDate.getFullYear()
      }).length
      
      monthlyData.push({ month: monthStr, count })
    }
    
    return { dailyData, weeklyData, monthlyData }
  }

  const { dailyData, weeklyData, monthlyData } = prepareChartData()

  // 대시보드
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">문의 관리 대시보드</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              로그아웃
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">전체 문의</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inquiries.length}건</div>
              <p className="text-xs text-muted-foreground">
                총 누적 문의 건수
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">오늘 문의</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayCount}건</div>
              <p className="text-xs text-muted-foreground">
                {new Date().toLocaleDateString('ko-KR')} 기준
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">이번 달 문의</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{thisMonthCount}건</div>
              <p className="text-xs text-muted-foreground">
                {new Date().getMonth() + 1}월 문의 건수
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 차트 섹션 - 탭 형식 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>문의 추이 분석</CardTitle>
            <CardDescription>
              기간별 문의 수 변화를 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily">일간</TabsTrigger>
                <TabsTrigger value="weekly">주간</TabsTrigger>
                <TabsTrigger value="monthly">월간</TabsTrigger>
              </TabsList>
              
              <TabsContent value="daily" className="mt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="count" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        name="문의 수"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  최근 7일간 일별 문의 수 추이
                </p>
              </TabsContent>
              
              <TabsContent value="weekly" className="mt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Bar 
                        dataKey="count" 
                        fill="#3b82f6"
                        name="문의 수"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  최근 4주간 주별 문의 수 추이
                </p>
              </TabsContent>
              
              <TabsContent value="monthly" className="mt-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar 
                        dataKey="count" 
                        fill="#10b981"
                        name="문의 수"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  최근 6개월간 월별 문의 수 추이
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 검색 및 내보내기 */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="이름, 연락처, 문의내용으로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <Button
                onClick={exportToCSV}
                variant="outline"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                CSV 내보내기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 문의 목록 테이블 */}
        <Card>
          <CardHeader>
            <CardTitle>문의 목록</CardTitle>
            <CardDescription>
              {searchTerm && `"${searchTerm}" 검색 결과: `}
              {filteredInquiries.length}건의 문의
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead>이름</TableHead>
                    <TableHead>연락처</TableHead>
                    <TableHead>문의내용</TableHead>
                    <TableHead>등록일시</TableHead>
                    <TableHead className="text-right">작업</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        로딩 중...
                      </TableCell>
                    </TableRow>
                  ) : filteredInquiries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        문의가 없습니다.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredInquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell className="font-medium">{inquiry.id}</TableCell>
                        <TableCell>{inquiry.name}</TableCell>
                        <TableCell>{inquiry.contact}</TableCell>
                        <TableCell className="max-w-xs truncate">{inquiry.location}</TableCell>
                        <TableCell>
                          {new Date(inquiry.created_at).toLocaleString('ko-KR')}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(inquiry.id)}
                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}