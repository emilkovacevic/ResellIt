'use client'
import { useRouter } from 'next/navigation'

interface ActionButtonProps {
  route_id?: string
  route?: string
  title: string
  main?: boolean
}

const ActionButton = ({ route_id, main, title, route }: ActionButtonProps) => {
  const router = useRouter()
  const goToMessages = () => {
    if (route && route_id) router.push(`/${route + '/' + route_id}`)
    else if (route) router.push(`/${route}`)
    else router.push(`/${title.toLowerCase() + '/' + route_id}`)
  }
  return (
    <button
      className={` ${
        main
          ? 'bg-accent w-full font-extrabold text-xl hover:bg-primary hover:text-primary-foreground shadow-sm transition-colors hover:scale-105'
          : 'bg-secondary'
      } hover:bg-accent p-1 md:p-4 shadow inline-block rounded-md`}
      onClick={goToMessages}
    >
      {title}
    </button>
  )
}

export default ActionButton
