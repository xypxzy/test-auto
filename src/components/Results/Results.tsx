import { CarProps } from '@/types/car'
import styles from './Results.module.scss'

interface ResultsProps {
	carData: CarProps
	uploadFiles: File[]
}

export function Results({ carData, uploadFiles }: ResultsProps) {
	return (
		<section className={`${styles.result__card} text-gray-600 body-font`}>
			<div className='container px-5 mx-auto flex flex-col flex-wrap'>
				<div className='flex flex-wrap w-full'>
					<div className='lg:w-3/6 md:w-2/3 md:pr-10 md:py-6'>
						<div className='flex relative pb-6'>
							<div className='flex-grow pl-4 '>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Бренд машины
								</h2>
								<p className='leading-relaxed'>{carData.car_brand}</p>
							</div>
							<div className='pl-4'>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Точность определения
								</h2>
								<p className='leading-relaxed'>
									{(carData.car_brand_score * 100).toFixed(3)}%
								</p>
							</div>
						</div>
						<div className='flex relative pb-6'>
							<div className='flex-grow pl-4 '>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Цвет машины
								</h2>
								<p className='leading-relaxed'>{carData.car_color}</p>
							</div>
							<div className=' pl-4'>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Точность определения
								</h2>
								<p className='leading-relaxed'>
									{(carData.car_color_score * 100).toFixed(3)}%
								</p>
							</div>
						</div>
						<div className='flex relative pb-6'>
							<div className='flex-grow pl-4 '>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Кузов машины
								</h2>
								<p className='leading-relaxed'>{carData.car_type_body}</p>
							</div>
							<div className=' pl-4'>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Точность определения
								</h2>
								<p className='leading-relaxed'>
									{(carData.car_type_body_score * 100).toFixed(3)}%
								</p>
							</div>
						</div>
						<div className='flex relative pb-6'>
							<div className='flex-grow pl-4 '>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Страна
								</h2>
								<p className='leading-relaxed'>
									{carData.license_plate_country}
								</p>
							</div>
							<div className=' pl-4'>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Точность определения
								</h2>
								<p className='leading-relaxed'>
									{(carData.license_plate_country_score * 100).toFixed(3)}%
								</p>
							</div>
						</div>
						<div className='flex relative pb-6'>
							<div className='flex-grow pl-4 '>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Номер машины
								</h2>
								<p className='leading-relaxed'>
									{carData.license_plate_number}
								</p>
							</div>
							<div className=' pl-4'>
								<h2 className='font-medium title-font text-md text-gray-900 mb-1 tracking-wider'>
									Точность определения
								</h2>
								<p className='leading-relaxed'>
									{(carData.license_plate_number_score * 100).toFixed(3)}%
								</p>
							</div>
						</div>
					</div>
					<img
						className='lg:w-3/6 md:w-1/3 object-contain object-center rounded-lg md:mt-0 mt-12'
						src={URL.createObjectURL(uploadFiles[0])}
						alt='step'
					/>
				</div>
			</div>
		</section>
	)
}
