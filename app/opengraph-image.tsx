import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, color: 'white' }}>
          Aditya Rathi
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 20,
            background: 'linear-gradient(90deg, #6EE7B7, #3B82F6)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    { ...size }
  )
}