"use client";

import { useState, useEffect } from "react";

/**
 * @param initialLoadingState
 * @param loadingDuration
 * @returns
 */
const useLoading = (initialLoadingState = true, loadingDuration = 3000) => {
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  useEffect(() => {
    if (initialLoadingState) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, loadingDuration);

      return () => clearTimeout(timer);
    }
  }, [initialLoadingState, loadingDuration]);

  return isLoading;
};

export default useLoading;
