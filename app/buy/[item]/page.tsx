export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  return <main>Buy product page {JSON.stringify(params)}</main>
}
