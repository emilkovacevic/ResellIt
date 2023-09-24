'use client'
import { useRouter } from 'next/navigation';

interface GoToUserStoreProps{
    user_id: string
}

const GoToUserStore = ({user_id}:GoToUserStoreProps) => {
    const router = useRouter();
    const goBack = () => {
        router.push(`/seller/${user_id}`);
    };
    return (
        <button  className='hover:bg-accent p-4 shadow inline-block bg-secondary rounded-md' onClick={goBack}>Sellers store</button>
    )
}

export default GoToUserStore