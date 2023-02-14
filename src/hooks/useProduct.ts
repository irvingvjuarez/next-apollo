export const useProduct = () => {
	const addProduct = (data: FormData) => {
		console.log({data})
	}

	return {
		addProduct
	}
}