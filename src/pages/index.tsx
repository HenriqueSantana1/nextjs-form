import Layout from '@/components/templates/Layout'
import Image from 'next/image'
import loginImg from 'public/img3.svg'

export default function SignInPage() {
  return (
    <Layout title="Login">
      <div className="h-screen w-screen flex flex-row">
        <div className="bg-purple-200 w-7/12 flex justify-center p-5">
          <Image src={loginImg} />
        </div>
        <div className="w-5/12">
          <form className="mt-8 space-y-6" action="#" method="POST"></form>
        </div>
      </div>
    </Layout>
  )
}
