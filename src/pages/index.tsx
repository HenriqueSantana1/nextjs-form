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
        <div className="w-5/12 p-10">
          <h1 className="px-5 font-bold text-3xl text-gray-800">Sign In</h1>
          <form className="mt-8" action="#" method="POST">
            <label
              className="block text-gray-700 text-sm font-medium mb-2 mt-10"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block max-w-xl appearance-none leading-normal"
              type="email"
              id="username"
              placeholder="jane@example.com"
            />
            <label
              className="block text-gray-700 text-sm font-medium mb-2 mt-8"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-2 px-4 block max-w-xl appearance-none leading-normal"
              type="password"
              id="password"
              placeholder="passowrd"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}
