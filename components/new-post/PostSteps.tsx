'use client'

import useAppState from '@/store/state'
import SelectCategory from './SelectCategory'
import UploadImages from './UploadImages'
import EnterInformation from './EnterInformation'
import ViewPost from './ViewPost'

const PostSteps = () => {
  const { currentStep } = useAppState()
  return (
    <>
      {currentStep === 1 && <SelectCategory />}
      {currentStep === 2 && <UploadImages />}
      {currentStep === 3 && <EnterInformation />}
      {currentStep === 4 && <ViewPost />}
    </>
  )
}

export default PostSteps
