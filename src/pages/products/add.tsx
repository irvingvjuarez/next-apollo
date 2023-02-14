import { useProduct } from "@/hooks/useProduct"
import { FormEvent, useRef } from "react"

const AddProduct = () => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const { addProduct } = useProduct()
	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const data = new FormData(formRef.current as HTMLFormElement)
		addProduct(data)
	}

	return (
		<section>
			<form ref={formRef} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<br />
					<input type="text" id="title" required />
				</div>

				<div>
					<label htmlFor="price">Price</label>
					<br />
					<input type="number" id="price" required />
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<br />
					<textarea id="description" cols={30} rows={10} required></textarea>
				</div>

				<div>
					<label htmlFor="categoryId">Category ID</label>
					<br />
					<input type="number" id="categoryId" required />
				</div>

				<div>
					<label htmlFor="image">Image link</label>
					<br />
					<input type="text" id="image" required />
				</div>

				<br />
				<button>
					Submit
				</button>
			</form>
		</section>
	)
}

export default AddProduct