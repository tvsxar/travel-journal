function AuthForm({ isLogin }) {
  return (
    <form className="flex flex-col justify-center">
      {!isLogin && (
        <input
          type="text"
          className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
          placeholder="Username"
        />
      )}
      <input
        type="email"
        className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full text-sm bg-cyan-600/5 rounded-xl px-5 py-3 mb-4 outline-none"
        placeholder="Password"
      />
      <button
        className="w-full text-sm font-medium shadow-lg shadow-cyan-200/50 h-12
            bg-cyan-500 text-white p-2 rounded-full my-2 mt-4 cursor-pointer hover:bg-cyan-100 hover:text-cyan-500"
      >
        {isLogin ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default AuthForm;
