export default function manifest() {
    return {
      name: 'RCN live tv',
      short_name: 'RCNTV',
      description: 'A Progressive Web App built by Asad',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }