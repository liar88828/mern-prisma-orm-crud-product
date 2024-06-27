import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getProduct = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const response = await prisma.product.create({
      data: { name, price: price },
    });
    res.status(201).json(response);
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
};
export const updateProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const response = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: { name, price: price },
    });
    res.status(201).json(response);
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const response = await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
