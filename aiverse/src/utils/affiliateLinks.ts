/**
 * Affiliate Link Management Utility
 *
 * Handles converting regular tool links to affiliate links and
 * tracks clicks via Google Analytics 4 custom events.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface AffiliateConfig {
  pattern: string | RegExp;
  convertToAffiliate: (originalUrl: string) => string;
  network?: string;
}

// Configure your affiliate links here
const affiliateConfigs: AffiliateConfig[] = [
  // Active affiliate partnerships
  {
    pattern: /elevenlabs\.io/i,
    network: 'direct',
    convertToAffiliate: () => `https://try.elevenlabs.io/5nlkb0r3t02z`
  },
  {
    pattern: /pollo\.ai/i,
    network: 'direct',
    convertToAffiliate: () => `https://pollo.ai?ref=ndk1mgu`
  },
  {
    pattern: /synthesia\.io/i,
    network: 'partnerstack',
    convertToAffiliate: () => `https://www.synthesia.io/?via=andrew-froehlich`
  },

  // Future affiliate slots — uncomment and add your IDs when approved
  // {
  //   pattern: /canva\.com/i,
  //   network: 'impact',
  //   convertToAffiliate: () => `https://partner.canva.com/c/YOUR_ID/YOUR_OFFER`
  // },
  // {
  //   pattern: /adobe\.com/i,
  //   network: 'adobe-affiliate',
  //   convertToAffiliate: (url) => `https://www.adobe.com/?sdid=YOUR_ID&mv=affiliate`
  // },
  // {
  //   pattern: /jasper\.ai/i,
  //   network: 'partnerstack',
  //   convertToAffiliate: () => `https://jasper.ai?fpr=YOUR_PARTNER_ID`
  // },
  // {
  //   pattern: /grammarly\.com/i,
  //   network: 'impact',
  //   convertToAffiliate: () => `https://www.grammarly.com/?affiliateNetwork=impact&affiliateID=YOUR_ID`
  // },
  // {
  //   pattern: /notion\.so/i,
  //   network: 'direct',
  //   convertToAffiliate: () => `https://affiliate.notion.so/YOUR_ID`
  // },
  // {
  //   pattern: /leonardo\.ai/i,
  //   network: 'direct',
  //   convertToAffiliate: () => `https://leonardo.ai/?ref=YOUR_ID`
  // },
  // {
  //   pattern: /capcut\.com/i,
  //   network: 'direct',
  //   convertToAffiliate: (url) => url
  // },
  // {
  //   pattern: /gumroad\.com/i,
  //   network: 'direct',
  //   convertToAffiliate: (url) => url
  // },
]

/**
 * Converts a tool link to its affiliate version if configured
 */
export function getAffiliateLink(originalLink: string): string {
  for (const config of affiliateConfigs) {
    const matches = typeof config.pattern === 'string'
      ? originalLink.includes(config.pattern)
      : config.pattern.test(originalLink)

    if (matches) {
      try {
        return config.convertToAffiliate(originalLink)
      } catch (error) {
        console.error('Error converting to affiliate link:', error)
        return originalLink
      }
    }
  }
  return originalLink
}

/**
 * Check if a link has an affiliate conversion configured
 */
export function isAffiliateLink(link: string): boolean {
  return affiliateConfigs.some(config => {
    return typeof config.pattern === 'string'
      ? link.includes(config.pattern)
      : config.pattern.test(link)
  })
}

/**
 * Track a click event via GA4
 */
function trackClick(toolLink: string, isAffiliate: boolean) {
  if (typeof window.gtag === 'function') {
    try {
      const domain = new URL(toolLink).hostname
      window.gtag('event', 'tool_click', {
        tool_domain: domain,
        is_affiliate: isAffiliate,
        link_url: toolLink,
      })
    } catch {
      // URL parsing failed, skip tracking
    }
  }
}

/**
 * Opens a tool link (with affiliate conversion if configured) and tracks the click
 */
export function openToolLink(link: string): void {
  const isAffiliate = isAffiliateLink(link)
  const affiliateLink = getAffiliateLink(link)
  trackClick(affiliateLink, isAffiliate)
  window.open(affiliateLink, '_blank', 'noopener,noreferrer')
}
