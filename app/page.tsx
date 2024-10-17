"use client"

import React, { useState, useEffect } from 'react'
import { ShoppingBag, Leaf, Truck, ChevronDown, ChevronUp, Copy, Tag, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { 
  ssr: false,
  loading: () => <p>Loading map...</p>
})

// ... (rest of the imports and type definitions remain the same)

export default function Component() {
  const [isMounted, setIsMounted] = useState(false)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('product')
  const couponCode = 'LOYALTY15'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ... (rest of the component logic remains the same)

  if (!isMounted) {
    return null // or a loading indicator
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <div className="absolute top-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded z-10">
          Powered by SoftGroup
        </div>
        <div className="h-64">
          <MapComponent />
        </div>
      </div>
      {/* ... (rest of the JSX remains the same) */}
    </Card>
  )
}