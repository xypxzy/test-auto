import { useState } from 'react'
import { useQuery } from 'react-query'
import './App.scss'
import logo from './assets/logo.svg'
import { DragNDrop } from './components/DragNDrop/DragNDrop'
import { Results } from './components/Results/Results'
import { CarProps } from './types/car'

function App() {
	const [uploadFiles, setUploadFiles] = useState<File[] | undefined>(undefined)
	const { data, isLoading, refetch } = useQuery<{ data: CarProps }>(
		'car',
		async () => {
			try {
				const formData = new FormData()

				if (uploadFiles && uploadFiles.length > 0) {
					formData.append('file', uploadFiles[0])
				}

				uploadFiles?.forEach(file => formData.append('files', file))

				const response = await fetch(
					`${import.meta.env.VITE_API_URL}api/v1/vision/detect/`,
					{
						method: 'POST',
						body: formData,
					}
				)

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				return response.json()
			} catch (error) {
				throw new Error(`Error: ${error}`)
			}
		},
		{
			enabled: false,
		}
	)

	const handleQuery = () => {
		refetch()
	}

	return (
		<div className={`container space-y-10 my-10`}>
			<header className='header'>
				<div className='header__wrapper'>
					<h1 className='ml-10'>
						<img src={logo} alt='logo' width={100} height={100} />
					</h1>
					<span className='ml-6'>
						<p className='header__title'>Все о вашем автомобиле и не только</p>
						<p className='header__subtitle'>
							Автомобильный портал проверки баз данных по госномеру
							транспортного средства.
						</p>
					</span>
				</div>
			</header>

			{isLoading ? (
				<div className='relative h-[70dvh]'>
					<div
						role='status'
						className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2'
					>
						<svg
							aria-hidden='true'
							className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-800'
							viewBox='0 0 100 101'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
								fill='currentColor'
							/>
							<path
								d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
								fill='currentFill'
							/>
						</svg>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			) : !data || !uploadFiles ? (
				<>
					<DragNDrop
						setUploadFiles={setUploadFiles}
						handleQuery={handleQuery}
					/>
				</>
			) : (
				<Results carData={data.data} uploadFiles={uploadFiles} />
			)}
		</div>
	)
}

export default App
