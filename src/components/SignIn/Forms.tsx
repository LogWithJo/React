import { useState } from "react";

interface User {
	username: string;
	password: string;
}

const user1: User = {
	username: "Youssef 😍😍😍😍",
	password: "",
};
function Forms({ setError }: { setError: any }) {
	const [user, setUser] = useState(user1);
	// const [error, setError] = useState()

	return (
		<div className="p-10 flex items-center justify-center bg-background">
			<div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
				<h1 className="text-2xl font-bold mb-2">Sign In</h1>

				<p className="text-sm text-muted-foreground mb-6">
					Enter your credentials below
				</p>

				<form
					className="space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						if (user.password === "") {
							setError(true);
						}
					}}
				>
					<div className="space-y-2">
						<label htmlFor="username" className="text-sm font-medium">
							Username
						</label>

						<input
							type="text"
							id="username"
							value={user.username}
							onChange={(e) =>
								setUser({
									...user,
									username: e.target.value,
								})
							}
							className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="password" className="text-sm font-medium">
							Password
						</label>

						<input
							type="password"
							id="password"
							value={user.password}
							onChange={(e) =>
								setUser({
									...user,
									password: e.target.value,
								})
							}
							placeholder="Try to keep it Empty"
							className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
						/>
					</div>

					<button
						type="submit"
						className="w-full rounded-md bg-black text-white py-2 text-sm font-medium hover:opacity-90 transition"
					>
						Submit
					</button>
				</form>

				<div className="mt-6 rounded-lg border p-4 text-sm">
					<p className="mb-2">
						😆😆😆😆 Oh sorry, there is no security on My Website
					</p>

					<p className="font-medium">
						Your password is:
						<span className="ml-2 text-muted-foreground">
							{user.password?.length > 0 ? user.password : "not yet ..."}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Forms;
