import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { signIn } from "../sign-in";

export const useSignIn = () => {
	const { mutateAsync, isPending } = useMutation({
		mutationFn: signIn,
		onSuccess: () => {
			toast.success("Bem-vindo");
		},
		onError: () => {
			toast.error("Houve um erro ao logar");
		},
	});

	return { SignIn: mutateAsync, isLoadingSignIn: isPending };
};
