<script lang="ts">
	import { ethers } from "ethers";
	import { tokenABI } from "./utils/token";
	let displaySymbol: string = "";
	let tokenSupply: bigint = BigInt(0);
	let dec;
	let humanReadableAmount: bigint = BigInt(0);
	let userAddress: string = "";
	let transferAmount;

	async function connectWallet() {
		const provider = new ethers.providers.Web3Provider(
			(window as any).ethereum,
			"any"
		);
		await provider.send("eth_requestAccounts", []);
		const tokenAddress = "0xc7C4b895083321E1C94e3e79Cc8084b717F5cA9C";
		const contract = new ethers.Contract(tokenAddress, tokenABI, provider);

		const symbol = await contract.symbol();
		displaySymbol = symbol;

		const totalSupply = await contract.totalSupply();
		tokenSupply = totalSupply.toBigInt();

		const decimals = await contract.decimals();
		dec = decimals.toBigInt();
		humanReadableAmount = tokenSupply / BigInt(10) ** dec;
	}
	async function transferTokens(address: string, amount: number) {
		const provider = new ethers.providers.Web3Provider(
			(window as any).ethereum,
			"any"
		);
		const signer = provider.getSigner();
		const tokenAddress = "0xc7C4b895083321E1C94e3e79Cc8084b717F5cA9C";

		const contract = new ethers.Contract(tokenAddress, tokenABI, signer);
		const dai = ethers.utils.parseUnits(amount.toString(), 18);
		let success = await contract.transfer(address, dai);
		console.log(success);
	}
</script>

<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md space-y-2">
				<div class="card w-96 bg-base-100 shadow-xl">
					<div class="card-body">
						<button class="btn" on:click={connectWallet}
							>Connect Wallet</button
						>
						<div id="symbol">
							Symbol Name: {displaySymbol}
						</div>

						<div id="supply">
							Token supply: {humanReadableAmount}
						</div>
					</div>
				</div>
				<div class="card w-96 bg-neutral text-neutral">
					<div class="card-body items-center text-center">
						<input
							class="input input-bordered input-primary w-full max-w-xs"
							bind:value={userAddress}
							type="text"
							placeholder="Enter address to transfer to"
						/>
						<input
							class="input input-bordered input-primary w-full max-w-xs"
							bind:value={transferAmount}
							type="text"
							placeholder="Transfer Amount"
						/>
						<button
							class="btn btn-primary"
							on:click={async () => {
								await transferTokens(
									userAddress,
									transferAmount
								);
							}}>Transfer</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
