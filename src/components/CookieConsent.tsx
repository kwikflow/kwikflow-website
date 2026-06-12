'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MetaPixel from './MetaPixel'

const STORAGE_KEY = 'kwikflow-cookie-consent'
type Consent = 'accepted' | 'rejected'

/**
 * Cookie consent gate. Marketing/analytics tracking (Meta Pixel) is mounted
 * ONLY when the visitor has explicitly accepted. Choice is remembered in
 * localStorage so the banner does not reappear.
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    let stored: Consent | null = null
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      if (v === 'accepted' || v === 'rejected') stored = v
    } catch {}
    // Reading persisted consent is only possible after mount (no localStorage
    // on the server), so syncing state here is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored)
    setHydrated(true)
  }, [])

  const choose = (value: Consent) => {
    try { localStorage.setItem(STORAGE_KEY, value) } catch {}
    setConsent(value)
  }

  const showBanner = hydrated && consent === null

  return (
    <>
      {consent === 'accepted' && <MetaPixel />}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookievoorkeuren"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-[300] p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:p-0"
        >
          <div className="mx-auto w-full max-w-[420px] rounded-2xl border border-hairline bg-white p-5 shadow-[var(--shadow-lg)]">
            <p className="text-[0.95rem] font-semibold text-heading">We gebruiken cookies</p>
            <p className="mt-1.5 text-[0.85rem] leading-relaxed text-body">
              We plaatsen analytische en marketingcookies om onze website te verbeteren — alleen met jouw toestemming.
              Lees meer in ons{' '}
              <Link href="/cookiebeleid" className="font-medium text-brand-text underline underline-offset-2">
                cookiebeleid
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button onClick={() => choose('accepted')} className="btn btn-primary flex-1 text-[0.9rem]">
                Accepteren
              </button>
              <button onClick={() => choose('rejected')} className="btn btn-secondary flex-1 text-[0.9rem]">
                Weigeren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
