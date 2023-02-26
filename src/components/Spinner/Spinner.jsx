function Spinner() {
  return (
    <section className='flex items-center justify-center h-screen bg-greyLight-1'>
      <div className='flex items-center justify-center'>
        <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent-color border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div>
      </div>
    </section>
  )
}

export default Spinner
