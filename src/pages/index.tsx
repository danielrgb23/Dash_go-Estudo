import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: String;
  password: String;
}

export default function Signin() {

  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState

  const handleSignin: SubmitHandler<SignInFormData > = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }


  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" placeholder="E-mail" {...register('email')} />

          <Input type="password" label="Senha" placeholder="Senha" {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
function yupResolver(SignInFormSchema: any): import("react-hook-form").Resolver<SignInFormData, any> | undefined {
  throw new Error('Function not implemented.');
}

