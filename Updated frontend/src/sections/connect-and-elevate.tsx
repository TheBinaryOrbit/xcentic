'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ConnectAndElevate = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center py-20 bg-white">
      <div className="container mx-auto px-6 rounded-3xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Connect & Elevate</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Ready to take your business to new heights? Get in touch with us and let's create something extraordinary together.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <Card className="contact-item bg-gray-950 text-white">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Unlock the power of technology to drive your business forward. Contact us now!</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-gray-700 text-white border-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-gray-700 text-white border-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your Message" className="bg-gray-700 text-white border-none" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="contact-item flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Get Started with Xcentic Today</h3>
            <p className="mb-6">We're always excited to hear about new projects and opportunities. Reach out to us and let's start a conversation about how we can help elevate your business.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedIn className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectAndElevate

