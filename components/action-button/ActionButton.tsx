'use client'
import { useRouter } from 'next/navigation'

interface ActionButtonProps {
  user_id: string
  title: string
  main?: boolean
}

const ActionButton = ({ user_id, main, title }: ActionButtonProps) => {
  const router = useRouter()
  const goToMessages = () => {
    router.push(`/${title.toLowerCase() + '/' + user_id}`)
  }
  return (
    <button
      className={` ${
        main
          ? 'bg-accent w-full font-extrabold text-xl hover:bg-primary hover:text-primary-foreground shadow-sm transition-colors hover:scale-105'
          : 'bg-secondary'
      } hover:bg-accent p-4 shadow inline-block rounded-md`}
      onClick={goToMessages}
    >
      {title}
    </button>
  )
}

export default ActionButton
