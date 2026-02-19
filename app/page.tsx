import { StickyBanner } from "@/components/sticky-banner"
import { HeroSection } from "@/components/hero-section"
import { LetterSection } from "@/components/letter-section"
import { VaultContents } from "@/components/vault-contents"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"

export default function Page() {
  return (
    <main>
      <StickyBanner />
      <HeroSection />
      <LetterSection />
      <VaultContents />
      <PricingSection />
      <FaqSection />
    </main>
  )
}
