import { z } from 'zod'

const productSchema = z.object({
  title: z.string({
    invalid_type_error: 'El titulo debe ser string',
    required_error: 'El titulo es obligatorio'
  }),
  category: z.string({
    invalid_type_error: 'La categoria debe ser un string',
    required_error: 'La categoria es obligatoria'
  }),
  price: z.number({
    invalid_type_error: 'El precio debe ser un numero',
    required_error: 'El precio es obligatorio'
  }).positive({
    message: 'El precio debe ser positivo'
  }),
  stock: z.number({
    invalid_type_error: 'El stock debe ser un numero',
    required_error: 'El stock es obligatorio'
  }).int({
    message: 'El stock debe ser un numero entero'

  }).positive({
    message: 'El stock debe ser positivo'
  })
})

export const valdiateProduct = (object) => {
  return productSchema.safeParse(object)
}

export const validatePartialProduct = (object) => {
  return productSchema.partial().safeParse(object)
}
