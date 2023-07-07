import {z} from 'zod';

export const loginSreenSchema = z.object({
  email: z.string().email('email invalido'),
  password: z.string().min(8, 'Senha deve ter no minimo 8 caracteres'),
});

export type SingUpSchema = z.infer<typeof loginSreenSchema>;
