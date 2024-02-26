package com.algos.sorting;

import java.util.Arrays;

public class QuickSort {

	public static void main(String[] args) {
//		int[] arr = { 29990, 3, 4, 6, 7, 7, 45, 5, 435, 3 };
		int[] arr = { 3, 45, 65, 34, 2, 56, 234, 65 };

		// Random input
		int[] randomArray1 = { 5, 2, 9, -3, 0, 7, 1 };
		int[] randomArray2 = { 100, -50, 20, 0, -10, 30, 40, -20 };
		int[] randomArray3 = { 3, 3, 3, 2, 2, 1, 1, 1 };

		// Sorted input
		int[] sortedArray1 = { -5, 0, 1, 3, 5, 7, 9 };
		int[] sortedArray2 = { 10, 8, 6, 4, 2, 0, -2, -4 };
		int[] sortedArray3 = { 1, 1, 1, 2, 2, 3, 3 };

		// Reverse sorted input
		int[] reverseSortedArray1 = { 9, 7, 5, 3, 1, -1, -3 };
		int[] reverseSortedArray2 = { 15, 12, 9, 6, 3, 0, -3, -6 };
		int[] reverseSortedArray3 = { 3, 3, 2, 2, 1, 1, 1 };
		int[] reverseSortedArray4 = { 3, 3, 2, 3, 1, 1, 1 };

		// Empty input
		int[] emptyArray = {};

		// Single element input
		int[] singleElementArray = { 42 };

		// Boundary cases
		int[] boundaryArray1 = { 2, 4 };
		int[] boundaryArray2 = { 3, 1 };

		// Special cases
		int[] specialArray1 = { 5, 3, 1, 2, 4, 0, 6 };

		System.out.println(Arrays.toString(quickSort(arr)));
		System.out.println(Arrays.toString(quickSort(randomArray1)));
		System.out.println(Arrays.toString(quickSort(randomArray2)));
		System.out.println(Arrays.toString(quickSort(randomArray3)));
		System.out.println(Arrays.toString(quickSort(sortedArray1)));
		System.out.println(Arrays.toString(quickSort(sortedArray2)));
		System.out.println(Arrays.toString(quickSort(sortedArray3)));
		System.out.println(Arrays.toString(quickSort(reverseSortedArray1)));
		System.out.println(Arrays.toString(quickSort(reverseSortedArray2)));
		System.out.println(Arrays.toString(quickSort(reverseSortedArray3)));
		System.out.println(Arrays.toString(quickSort(emptyArray)));
		System.out.println(Arrays.toString(quickSort(singleElementArray)));
		System.out.println(Arrays.toString(quickSort(boundaryArray1)));
		System.out.println(Arrays.toString(quickSort(boundaryArray2)));
		System.out.println(Arrays.toString(quickSort(specialArray1)));

		System.out.println(Arrays.toString(quickSort(reverseSortedArray4)));
	}

	static int[] quickSort(int[] arr) {
		if (arr.length == 0)
			return arr;
		sort(arr, 0, arr.length - 1);
		return arr;
	}

	private static void sort(int[] arr, int start, int end) {
		if (start > end)
			return;
		int pivotIndex = rearrange(arr, start, end);
//		System.out.println("for pivotIndex: " + pivotIndex + " arr:" + Arrays.toString(arr));
		sort(arr, start, pivotIndex - 1);
		sort(arr, pivotIndex + 1, end);
	}

	private static int rearrange(int[] arr, int low, int high) {
//		if (low == 2 && high == 3) {
//			System.out.println("rearrange called with low: " + low + " high: " + high);
//		}
		int pivotIndex = low;
		int left = low, right = high;
		while (left < right) {
			while (left < high && arr[left] < arr[pivotIndex]) {
				left++;
			}
			while (right > low && arr[right] >= arr[pivotIndex]) {
				right--;
			}
			if (left < right) {
//				PRINT(arr, left, right);
				SWAP(arr, left, right);
			}
		}
		if (pivotIndex != right) {
//			PRINT(arr, pivotIndex, right);
			SWAP(arr, pivotIndex, right);
		}

		return right;
	}

	public static final void PRINT(int[] arr, int swappingThis, int swappingWith) {
		System.out.print("[");
		int index = 0;
		for (int temp : arr) {
			if (index == swappingThis || index == swappingWith)
				System.out.print("'" + temp + "'");
			else
				System.out.print(temp);
			if (index != arr.length - 1)
				System.out.print(", ");
			index++;
		}
		System.out.println("]");

	}

	public final static void SWAP(int[] arr, int i, int j) {
		arr[i] = arr[i] ^ arr[j];
		arr[j] = arr[i] ^ arr[j];
		arr[i] = arr[i] ^ arr[j];
	}

}
