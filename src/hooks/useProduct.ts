import { AddCategoryDocument, CreateProductDto } from "@/services/graphql-fakeapi"
import { useMutation } from "@apollo/client"

export const useProduct = () => {
	// The document is named AddCategoryDocument, but it's actually for a Product
	const [mutate, { data: mutationData, loading }] = useMutation(AddCategoryDocument)

	const addProduct = (data: CreateProductDto) => {
		mutate({
			variables: { data }
		})

		return {
			mutationData, loading
		}
	}

	return {
		addProduct
	}
}