import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import PestImageUpload from "@/components/insect-pest-detection"
import PlantImageUpload from "@/components/plant-disease-detection"

export default function TabsDemo() {
  const t = useTranslations('PlantDisease&PestDetection')
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full flex-col items-center justify-center gap-6 mt-10">
        <Tabs defaultValue="plant" className="w-full">
          <TabsList className="flex mx-auto w-fit">
            <TabsTrigger value="plant">{t('PlantDiseaseDetection.title')}</TabsTrigger>
            <TabsTrigger value="pest">{t('PestDetection.title')}</TabsTrigger>
          </TabsList>
          <TabsContent value="plant">
            <PlantImageUpload/>
          </TabsContent>
          <TabsContent value="pest">
            <PestImageUpload/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}