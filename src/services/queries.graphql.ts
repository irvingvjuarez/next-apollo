import { gql } from "@apollo/client"

export const GET_ALL_COUNTRIES = gql`
	query {
		countries {
			name
			code
			capital
			currency
			emoji
		}
	}
`

export const GET_SINGLE_COUNTRY = gql`
	query Country ($code: ID!){
		country(code: $code) {
			name
			capital
			currency
			code
		}
	}
`