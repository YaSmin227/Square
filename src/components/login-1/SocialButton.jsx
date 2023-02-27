const SocialButton = ({ image, text }) => {
  return (
    <button className='bg-white dark:bg-[#44444F] dark:border-none border-[#F1F1F5] border-[1px] rounded-xl p-2 flex gap-3 w-full justify-center items-center'>
      <img src={image} alt="google" width={16} height={16} />
      <span className='text-sm text-[#696974] dark:text-[#FAFAFB]'>{text}</span>
    </button>
  )
}

export default SocialButton