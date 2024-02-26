package com.algos.sorting;

import java.util.Arrays;

public class SelectionSort {
	
	public static void main(String[] args) {
		int[] arr = {29990,3,4,6,7,7,45,5,435,3};
        // Random input
        int[] randomArray1 = {5, 2, 9, -3, 0, 7, 1};
        int[] randomArray2 = {100, -50, 20, 0, -10, 30, 40, -20};
        int[] randomArray3 = {3, 3, 3, 2, 2, 1, 1, 1};

        // Sorted input
        int[] sortedArray1 = {-5, 0, 1, 3, 5, 7, 9};
        int[] sortedArray2 = {10, 8, 6, 4, 2, 0, -2, -4};
        int[] sortedArray3 = {1, 1, 1, 2, 2, 3, 3};

        // Reverse sorted input
        int[] reverseSortedArray1 = {9, 7, 5, 3, 1, -1, -3};
        int[] reverseSortedArray2 = {15, 12, 9, 6, 3, 0, -3, -6};
        int[] reverseSortedArray3 = {3, 3, 2, 2, 1, 1, 1};

        // Empty input
        int[] emptyArray = {};

        // Single element input
        int[] singleElementArray = {42};

        // Boundary cases
        int[] boundaryArray1 = {2, 4};
        int[] boundaryArray2 = {3, 1};

        // Special cases
        int[] specialArray1 = {5, 3, 1, 2, 4, 0, 6};
        
//		System.out.println(Arrays.toString(insertionSort(arr)));
//		System.out.println(Arrays.toString(insertionSort(randomArray1)));
//		System.out.println(Arrays.toString(insertionSort(randomArray2)));
//		System.out.println(Arrays.toString(insertionSort(randomArray3)));
		System.out.println(Arrays.toString(insertionSort(sortedArray1)));
//		System.out.println(Arrays.toString(insertionSort(sortedArray2)));
//		System.out.println(Arrays.toString(insertionSort(sortedArray3)));
//		System.out.println(Arrays.toString(insertionSort(reverseSortedArray1)));
//		System.out.println(Arrays.toString(insertionSort(reverseSortedArray2)));
//		System.out.println(Arrays.toString(insertionSort(reverseSortedArray3)));
//		System.out.println(Arrays.toString(insertionSort(emptyArray)));
//		System.out.println(Arrays.toString(insertionSort(singleElementArray)));
//		System.out.println(Arrays.toString(insertionSort(boundaryArray1)));
//		System.out.println(Arrays.toString(insertionSort(boundaryArray2)));
//		System.out.println(Arrays.toString(insertionSort(specialArray1)));
}
	
	static int[] insertionSort(int[] arr) {
		int l = arr.length;
		for(int i = 0; i < l-1; i++) {
			int j = i;
			System.out.println("for");
			while(j > -1 && arr[j] > arr[j+1]) {
				System.out.println("while");
				arr[j] = arr[j] ^ arr[j+1];
				arr[j+1] = arr[j] ^ arr[j+1];
				arr[j] = arr[j] ^ arr[j+1];
				j--;
			}
		}
		return arr;
	}
}
