export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  return <main>Message page {JSON.stringify(params)}</main>
}
