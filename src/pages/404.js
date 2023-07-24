import React, { useEffect } from "react"
import { navigate } from "gatsby"

export default function NotFoundPage() {

  useEffect (() => {
    navigate("/"); // redirecting to home page
  }, [])

  return (
    <div>
      <h1>(404) Page Not Found</h1>
    </div>
  )
}
