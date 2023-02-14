import { useProduct } from "@/hooks/useProduct"
import { CreateProductDto } from "@/services/graphql-fakeapi"
import Head from "next/head"
import { FormEvent, useRef } from "react"

const AddProduct = () => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const { addProduct } = useProduct()
	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const formData = new FormData(formRef.current as HTMLFormElement)
		const data: CreateProductDto = {
			categoryId: Number(formData.get("categoryId")),
			description: formData.get("description") as string,
			images: [formData.get("image") as string],
			price: Number(formData.get("price")),
			title: formData.get("title") as string
		}

		const mutation = addProduct(data)
	}

	return (
		<>
			<Head>
				<title>Add New Product</title>
			</Head>

			<section>
				<form ref={formRef} onSubmit={handleSubmit}>
					<div>
						<label htmlFor="title">Title</label>
						<br />
						<input type="text" id="title" name="title" required />
					</div>

					<div>
						<label htmlFor="price">Price</label>
						<br />
						<input type="number" id="price" name="price" required />
					</div>

					<div>
						<label htmlFor="description">Description</label>
						<br />
						<textarea id="description" name="description" cols={30} rows={10} required></textarea>
					</div>

					<div>
						<label htmlFor="categoryId">Category ID</label>
						<br />
						<input type="number" id="categoryId" name="categoryId" required />
					</div>

					<div>
						<label htmlFor="image">Image link</label>
						<br />
						<input type="text" id="image" name="image" required />
					</div>

					<br />
					<button>
						Submit
					</button>
				</form>
			</section>
		</>
	)
}

export default AddProduct