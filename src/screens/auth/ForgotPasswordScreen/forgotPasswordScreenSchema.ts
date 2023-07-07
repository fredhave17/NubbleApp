import {z} from 'zod';

export const forgotPasswordScreenSchema = z.object({
  email: z.string().email('email invalido'),
});

export type ForgotPasswordScreenSchema = z.infer<
  typeof forgotPasswordScreenSchema
>;
