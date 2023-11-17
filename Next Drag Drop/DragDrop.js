"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DragDrop({ ImageUpload, setImageUpload, Single }) {

	const onDrop = useCallback((acceptedFiles) => {
		// console.log('Dropped files:', acceptedFiles);
		// Handle the dropped files, for example, upload them
		// setImageUpload(Array.from(acceptedFiles));
		if (Single) {
			// console.log(Array.from(acceptedFiles[0]))
			// console.log([[...acceptedFiles][0]]);
			setImageUpload(acceptedFiles[0]);
		}
		else {
			// console.log([...acceptedFiles][0])
			setImageUpload(prevImageUpload => [...prevImageUpload, ...acceptedFiles]);
		}

	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	const handelChange = (e) => {
		if (Single) {
			// setImageUpload(Array.from(e.target.files[0]))
			// setImageUpload([[...acceptedFiles][0]]);
			setImageUpload(e.target.files[0])
		} else {
			// setImageUpload(Array.from(e.target.files))
			setImageUpload(prevImageUpload => [...prevImageUpload, ...e.target.files]);
		}
	}


	return (
		<div>
			<div
				{...getRootProps()}
				
			>
				<div >
					<div >

						{(Single && ImageUpload) || (!Single && ImageUpload.length) ?
							<>
								{Single ?
									<img  src={URL.createObjectURL(ImageUpload)} alt="Selected" /> :
									<div className='flex flex-wrap'>
										{ImageUpload.map((image, index) => (
											<div key={index}>
												<img  src={URL.createObjectURL(image)} alt="Selected" />
											</div>
										))}
									</div>
								}
							</> :
							<>
								
								<div >
									<input
										{...getInputProps()}
										id="file-upload"

										onChange={handelChange}

										name="file-upload"
										type="file"
										className="sr-only"
									/>
									<span>Click or drag & drop to Upload
										{Single ? ' a file' : ' files'}
									</span>
								</div>
								{/* <p className="pl-1">or drag and drop</p> */}
								<p >PNG, JPG up to 5MB</p>
							</>
						}
					</div>
				</div>
			</div>


		</div>
	)
}
