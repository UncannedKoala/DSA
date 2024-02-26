package com.algos.sorting;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class MergeSort {

	public static void main(String[] args) {
		int[] arr = { 29990, 3, 4, 6, 7, 7, 45, 5, 435, 3 };
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

		// Empty input
		int[] emptyArray = {};

		// Single element input
		int[] singleElementArray = { 42 };

		// Boundary cases
		int[] boundaryArray1 = { 2, 4 };
		int[] boundaryArray2 = { 3, 1 };

		// Special cases
		int[] specialArray1 = { 5, 3, 1, 2, 4, 0, 6 };

		System.out.println(Arrays.toString(mergeSort(arr)));
		System.out.println(Arrays.toString(mergeSort(randomArray1)));
		System.out.println(Arrays.toString(mergeSort(randomArray2)));
		System.out.println(Arrays.toString(mergeSort(randomArray3)));
		System.out.println(Arrays.toString(mergeSort(sortedArray1)));
		System.out.println(Arrays.toString(mergeSort(sortedArray2)));
		System.out.println(Arrays.toString(mergeSort(sortedArray3)));
		System.out.println(Arrays.toString(mergeSort(reverseSortedArray1)));
		System.out.println(Arrays.toString(mergeSort(reverseSortedArray2)));
		System.out.println(Arrays.toString(mergeSort(reverseSortedArray3)));
		System.out.println(Arrays.toString(mergeSort(emptyArray)));
		System.out.println(Arrays.toString(mergeSort(singleElementArray)));
		System.out.println(Arrays.toString(mergeSort(boundaryArray1)));
		System.out.println(Arrays.toString(mergeSort(boundaryArray2)));
		System.out.println(Arrays.toString(mergeSort(specialArray1)));
	}

	static int[] mergeSort(int[] arr) {
		if (arr.length == 0)
			return arr;
		sort(arr, 0, arr.length - 1);
		return arr;
	}

	private static void sort(int[] arr, int low, int high) {
		if (low >= high)
			return;
		int mid = (low + high) / 2;
		sort(arr, low, mid);
		sort(arr, mid + 1, high);
		merge(arr, low, mid, high);
	}

	private static void merge(int[] arr, int low, int mid, int high) {
//		int[] res = new int[high+1];		try it later
		List<Integer> res = new LinkedList<>();
		int left = low;
		int right = mid + 1;
		while (left <= mid && right <= high) {
			res.add(arr[(arr[left] < arr[right]) ? left++ : right++]);
		}
		while (left <= mid) {
			res.add(arr[left++]);
		}
		while (right <= high) {
			res.add(arr[right++]);
		}
		for (int i = low; i <= high; i++) {
			arr[i] = res.get(i - low);
		}
	}
}
