package garbageTest;

import java.util.Arrays;

public class Test {

	public static void main(String[] args) {
		int[] arr = { 29990, 3, 4, 6, 7, 7, 45, 5, 435, 3 };
//		int[] arr = { 5, 2, 9, -3, 0, 7, 1 };
		System.out.println(Arrays.toString(quickSort(arr)));
	}

	static int[] quickSort(int[] arr) {
		sort(arr, 0, arr.length - 1);
		return arr;
	}

	static void sort(int[] arr, int start, int end) {
		System.out.println("findPivot() called with start: " + start+ " and end: " + end);
		if (start < end) {
			int pivot = findPivot(arr, start, end);
			sort(arr, start , pivot-1);
			sort(arr, pivot+1, end);
		}
	}

	/*
	 * we switch with right at the end to ensure that the switch value is lower than
	 * pivot, if we were switching pivot with low then the low value may or may not
	 * be lower that or equals to the pivot value
	 */
	static int findPivot(int[] arr, int low, int high) {
//		System.out.println("findPivot() called with low: " + low + " and high: " + high);
		int pivotIndex = low;
		int left = low + 1, right = high;			//left starts from low+1 because low is the pivot
		while (left < right) {
			while (left <= high && arr[left] <= arr[pivotIndex]) {
				left++;
			}
			while (right > low && arr[right] > arr[pivotIndex]) {
				right--;
			}
			if(left < right) {
//				print(arr, left, right);
				SWAP(arr, left, right);
			}
			else if(right != pivotIndex){
//				print(arr, pivotIndex, right);
				SWAP(arr, pivotIndex, right);
			}
		}
		return right;
	}

	public static void SWAP(int[] arr, int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	
	static void print(int[] arr, int swappingThis, int swappingWith) {
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
}
