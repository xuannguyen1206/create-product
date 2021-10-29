import Head from 'next/head'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";
export default function Home() {
  const { register, handleSubmit } = useForm(); 
  const [formOn,setFormOn] = useState(false);
  const onsubmit = (data)=>{
    console.log(data);
  }
  
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  function switchFormOn():any{
    if(formOn === true){
      setFormOn(false);
    } else {
      setFormOn(true);
    }
  }
  return (
   <>
      <section className ='bg-green-500 bg-opacity-10 text-green-400 font-semibold h-16 flex items-center pl-4 mb-4'>
        <span className = 'text-2xl'>&#8249;</span>
        <span className = 'ml-2'>Đăng sản phẩm / dịch vụ </span>
      </section>
      <div className='border-b border-green-400 h-12 z-0 '>
        <div  className='h-full w-32 border-green-400 border relative top-1 z-10 bg-white border-b-0 border-t-2 border-2 rounded-md flex items-center justify-around ml-6'> {/* tab */} 
          <div className='rounded-full w-6 bg-green-400 text-center text-white'>
            <span >1</span>
          </div>
          <span className='text-green-400'>Danh mục</span>
        </div>
      </div>
      <section className='pt-10'>
        <div className='flex flex-col justify-around pl-5 pr-5'>
          <p className='mb-4'>Chọn đăng sản phẩm hoặc dịch vụ</p>
          <button onClick={switchFormOn} className='border border-black border-opacity-40 h-14 mb-4'>Sản phẩm</button>
          <button className='border border-black border-opacity-40 h-14 mb-6'>Dịch vụ</button>
        </div>
      </section>

      <section >
        <form onSubmit = {handleSubmit(onsubmit)} className ='flex flex-col pt-6 pl-5 pr-5 bg-gray-200'>
          <div className='h-52 flex flex-col justify-around mb-12'>
            {formOn && 
              <>          
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-16 pl-2 bg-gray-400' {...register("name", {required:'this is required'})}/>
                <label htmlFor='quatity'>Quantity</label>
                <input type='number' className='h-16 pl-2 bg-gray-400' {...register("quantity", {required:'this is required'})}/>
              </>
            }
          </div> 
          <button className='border border-black opacity-75 border-opacity-40 h-14 rounded-md text-gray-600 bg-white mb-3'>Lưu bản nháp</button>
          <div className='flex justify-between h-10 mb-3'>
            <button className='h-full w-5/12 border-green-400 border bg-white rounded-md text-green-400 font-semibold'>Trở về</button>
            <button className='h-full w-5/12 border-green-400 border bg-green-400 rounded-md text-white font-semibold' type ='submit'>Tiếp theo</button>
          </div>
        </form>

        
        
      </section>
   </>
  )
}
