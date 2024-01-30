import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './DragNDrop.module.scss'

interface DragNDropProps {
	setUploadFiles: (file: File[]) => void
}

export function DragNDrop({ setUploadFiles }: DragNDropProps) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

	const files = acceptedFiles.map(file => (
		// @ts-ignore
		<li key={file.path}>
			{/* @ts-ignore */}
			{file.path} - {file.size} bytes
		</li>
	))

	useEffect(() => {
		setUploadFiles(acceptedFiles)
	}, [acceptedFiles])

	return (
		<section className={styles.drop__card}>
			<div {...getRootProps()} className={styles.drop__container}>
				<input {...getInputProps()} />
				<div className={styles.drop__zone_icons}>
					<svg
						className={styles.drop__upload__icon}
						viewBox='0 0 24 24'
						fill='#FF5A5F'
					>
						<path d='M12 6l-4 4h3v4h2v-4h3m-10 6v2h12v-2h-12z'></path>
					</svg>
				</div>
				<p className={styles.drop__zone__text}>
					Перетащите сюда несколько изображений
					<br /> автомобилей или нажмите, чтобы выбрать изображения
				</p>
			</div>
			<aside>
				{acceptedFiles.length > 0 && (
					<>
						<h4 className='text-xl font-semibold'>Изображения</h4>
						<ul>{files}</ul>
					</>
				)}
			</aside>
		</section>
	)
}
