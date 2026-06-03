/**
 * Composable for branding-related utilities
 * Provides methods to customize text with installation-specific branding
 */

export function useBranding() {
  /**
   * Replaces "Chatwoot" in text with "Jandrea"
   * @param {string} text - The text to process
   * @returns {string} - Text with brand name replaced
   */
  const replaceInstallationName = text => {
    if (!text) return text;
    return text.replace(/Chatwoot/g, 'Jandrea');
  };

  return {
    replaceInstallationName,
  };
}
