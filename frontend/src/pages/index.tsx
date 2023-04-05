import { GetStaticProps } from 'next'
import React from 'react'

export interface Data {
  youtubes: Youtube[]
  error: boolean
  error_msg: string
}

export interface Youtube {
  id: string
  title: string
  subtitle: string
  avatar_image: string
  youtube_image: string
}

type Props = {
  data: Data
}

export default function index({ data }: Props) {
  const { youtubes } = data
  return (
    <div>
      <h1 className="text-3xl text-emerald-600">Hello World!</h1>
      <ul>
        {youtubes.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url =
    'http://codemobiles.com/adhoc/youtubes/index_new.php?user=admin&password=password&type=foods'
  const response = await fetch(url)
  const data: Data = await response.json()
  return {
    props: {
      data,
    },
  }
}
