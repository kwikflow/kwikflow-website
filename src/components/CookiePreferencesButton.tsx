'use client'

import { OPEN_PREFERENCES_EVENT } from './CookieConsent'

/**
 * Re-opens the cookie consent banner so visitors can change or withdraw their
 * choice. Used on /cookiebeleid.
 */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
      className="btn btn-secondary not-prose"
    >
      Cookievoorkeuren wijzigen
    </button>
  )
}
