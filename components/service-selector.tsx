"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Monitor, Smartphone, Globe } from "lucide-react"
import { useTranslations } from "next-intl"

export function ServiceSelector() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const t = useTranslations("serviceSelector")

  const services = [
    {
      id: "telegramBot",
      title: t("services.telegramBot.title"),
      icon: Bot,
      description: t("services.telegramBot.description"),
      example: t("services.telegramBot.example"),
    },
    {
      id: "adminPanel",
      title: t("services.adminPanel.title"),
      icon: Monitor,
      description: t("services.adminPanel.description"),
      example: t("services.adminPanel.example"),
    },
    {
      id: "mobileApp",
      title: t("services.mobileApp.title"),
      icon: Smartphone,
      description: t("services.mobileApp.description"),
      example: t("services.mobileApp.example"),
    },
    {
      id: "website",
      title: t("services.website.title"),
      icon: Globe,
      description: t("services.website.description"),
      example: t("services.website.example"),
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon
            const isSelected = selectedService === service.id

            return (
              <Button
                key={service.id}
                variant={isSelected ? "default" : "outline"}
                className={`h-auto p-6 flex flex-col items-center gap-3 transition-all ${
                  isSelected
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105"
                    : "hover:bg-gray-50 hover:scale-105"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <Icon className="h-8 w-8" />
                <span className="font-semibold">{service.title}</span>
              </Button>
            )
          })}
        </div>

        {selectedService && (
          <Card className="bg-white shadow-xl border-0 animate-in slide-in-from-bottom-4">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                {services.find((s) => s.id === selectedService)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-lg">{services.find((s) => s.id === selectedService)?.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">{services.find((s) => s.id === selectedService)?.example}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
