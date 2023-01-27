import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
export const getProduct = async (req, res) => {
	try {
		const response = await prisma.product.findMany()
		res.status(200).json(response)
	} catch (e) {
		res.status(500).json({msg: e.message})
	}

}
export const getProductById = async (req, res) => {
	try {
		const response = await prisma.product.findUnique({
			where: {
				id: Number(req.params.id)
			}
		})
		res.status(200).json(response)
	} catch (e) {
		res.status(400).json({msg: e.message})
	}


}
export const createProduct = (req, res) => {

}
export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}

