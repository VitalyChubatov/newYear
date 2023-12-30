import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion';
import grinch from '../public/pngwing.png'
import chrismas from '../public/Lovepik_com-401665650-christmas-tree.png'
import hat from '../public/pngfind.com-new-years-hat-png-1902426.png'
import newYear from '../public/—Pngtree—luxury 2024 new year logo_10839113.png'
import {FaTelegram} from 'react-icons/fa'


const name = new Date();
function App() {
  const [count, setCount] = useState([])
  const [isActive,setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const allSum = 130000

  const dateDolg = [
		{ date: '2023-12-29', value: 3150 },
		{ date: '2023-12-30', value: null },
		{ date: '2023-12-31', value: null },
		{ date: '2024-01-01', value: null },
		{ date: '2024-01-02', value: null },
		{ date: '2024-01-03', value: null },
		{ date: '2024-01-04', value: null },
		{ date: '2024-01-05', value: null },
		{ date: '2024-01-06', value: null },
		{ date: '2024-01-07', value: null },
		{ date: '2024-01-08', value: null },
		{ date: '2024-01-09', value: null },
		{ date: '2024-01-10', value: null },
		{ date: '2024-01-11', value: null },
		{ date: '2024-01-12', value: null },
		{ date: '2024-01-13', value: null },
		{ date: '2024-01-14', value: null },
		{ date: '2024-01-15', value: null },
		{ date: '2024-01-16', value: null },
		{ date: '2024-01-17', value: null },
		{ date: '2024-01-18', value: null },
		{ date: '2024-01-19', value: null },
		{ date: '2024-01-20', value: null },
		{ date: '2024-01-21', value: null },
		{ date: '2024-01-22', value: null },
		{ date: '2024-01-23', value: null },
		{ date: '2024-01-24', value: null },
		{ date: '2024-01-25', value: null },
		{ date: '2024-01-26', value: null },
		{ date: '2024-01-27', value: null },
		{ date: '2024-01-28', value: null },
		{ date: '2024-01-29', value: null },
		{ date: '2024-01-30', value: null },
		{ date: '2024-01-31', value: null },
	]

  function getDate (e) {
    setCount(e.currentTarget.value)
  }

  const clickDolg = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }


  const cartAnimation = {
		hidden: {
			y: 200,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: [0, 0, 0, 1, 1],
			transition: { delay: custom * 1 , duration: 1},
		}),
	}

  return (
		<>
			<img src={hat} width={120} height={120} className='head' alt='.' />
			<img
				src={chrismas}
				alt='.'
				width={180}
				height={200}
				className='chrismas'
				onClick={() => setIsOpen(!isOpen)}
			/>
			<form>
				<input type='date' onChange={getDate} placeholder='дата' />
				<button onClick={clickDolg}>
					{isActive ? 'Скрыть задолжность' : 'Узнать всю задолжность'}
				</button>
				{dateDolg.map(el =>
					el.date === count ? (
						<p>
							<div className='bold'>
              {el.value
								? 'Этого числа ты внес:' + ' ' + el.value + ' ' + 'Рублей'
								: null}{' '}
              </div>
                
						</p>
					) : null
				)}
				{isActive && (
					<p>
						Общий долг:
						<b className='bold'>
							{allSum - dateDolg.reduce((el, item) => el + item.value, 0)}{' '}
							Рублей
						</b>
					</p>
				)}
				<a href='https://t.me/houldC'>
					<FaTelegram />
				</a>
			</form>
			<div className='wrapper_footer'>
				<img
					src={newYear}
					alt='.'
					width={220}
					height={170}
					className='newYear'
				/>
				{isOpen ? (
					<motion.img
						src={grinch}
						alt='.'
						width={360}
						height={350}
						variants={cartAnimation}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						className='grinch'
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : null}
			</div>
		</>
	)
}

export default App
