import { signIn } from '@/auth';

export default function SignIn() {
  return (
    <div className="flex w-full h-full">
      asdasdasd
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        asdasdasdasdasdasdasd
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
