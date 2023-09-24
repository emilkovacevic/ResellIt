export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  return <main>Store page {JSON.stringify(params)}</main>
}
